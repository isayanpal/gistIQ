import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Skeleton } from "@/components/ui/skeleton";
import { FaFileAlt } from "react-icons/fa";
import { FiUpload, FiDownload, FiX } from "react-icons/fi";
import { ImSpinner8 } from "react-icons/im";
import axios, { type AxiosResponse } from "axios";
import ReactMarkdown from "react-markdown";

interface SummaryResponse {
  summary: string;
}

export default function Summarize() {
  const baseUrl = import.meta.env.VITE_API_URL;
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [summary, setSummary] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
      setSummary(null);
      setError(null);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      setError("Please select a file first");
      return;
    }

    const formData = new FormData();
    formData.append("pdf", selectedFile);

    setLoading(true);

    try {
      const response: AxiosResponse<SummaryResponse> = await axios.post(`${baseUrl}/upload`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setSummary(response.data.summary);
      setError(null);
    } catch (error) {
      console.error("Error uploading file:", error);
      setError("Error uploading or processing file. Please try again.");
      setSummary(null);
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = () => {
    window.print();
  };

  const resetSummary = () => {
    setSummary(null);
    setSelectedFile(null);
  };

  return (
    <div className="min-h-screen mx-auto py-8 px-4 max-w-4xl">
      <Card className="w-full bg-white text-black border border-gray-300 shadow-lg">
        {!summary && (
          <div>
            <CardHeader className="bg-gray-100 cursor-default">
              <CardTitle className="text-2xl font-bold flex items-center gap-2 text-blue-600">
                <FaFileAlt className="h-6 w-6 text-blue-600" />
                PDF Summarizer
              </CardTitle>
              <CardDescription className="text-start text-gray-600">
                Upload a PDF file to generate a concise summary
              </CardDescription>
            </CardHeader>
          </div>
        )}

        <CardContent className="pt-6 pb-2">
          {!summary ? (
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="border-2 border-dashed border-gray-400 rounded-lg p-6 text-center hover:bg-gray-100 transition-colors cursor-pointer relative">
                  <input
                    type="file"
                    accept=".pdf"
                    onChange={handleFileChange}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    disabled={loading}
                  />
                  <div className="flex flex-col items-center justify-center gap-2">
                    <FiUpload className="h-10 w-10 text-blue-600" />
                    <div className="text-sm font-medium">
                      {selectedFile ? (
                        <span className="text-blue-600">{selectedFile.name}</span>
                      ) : (
                        <span>Drag and drop or click to select a PDF file</span>
                      )}
                    </div>
                    <p className="text-xs text-gray-500">PDF files only, max 10MB</p>
                  </div>
                </div>

                <Button
                  onClick={handleUpload}
                  disabled={loading || !selectedFile}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <ImSpinner8 className="h-4 w-4 animate-spin" />
                      Processing...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <FaFileAlt className="h-4 w-4" />
                      Summarize PDF
                    </span>
                  )}
                </Button>
              </div>

              {error && (
                <Alert variant="destructive" className="mt-4 bg-red-200 text-red-800 border-red-400">
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              {loading && (
                <div className="space-y-3 mt-6">
                  <Skeleton className="h-4 w-3/4 bg-gray-300" />
                  <Skeleton className="h-4 w-full bg-gray-300" />
                  <Skeleton className="h-4 w-5/6 bg-gray-300" />
                  <Skeleton className="h-4 w-full bg-gray-300" />
                </div>
              )}
            </div>
          ) : (
            <div className="mt-6 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-blue-600">Summary</h3>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" onClick={handleDownload} className="flex items-center gap-1 border-blue-600 text-blue-600 hover:bg-blue-100">
                    <FiDownload className="h-4 w-4" />
                    Print
                  </Button>
                  <Button variant="ghost" size="sm" onClick={resetSummary} className="text-red-600 hover:text-red-700">
                    <FiX className="h-5 w-5" />
                  </Button>
                </div>
              </div>
              <div className="p-4 rounded-lg max-w-none text-start bg-gray-100 text-gray-800">
                <ReactMarkdown>{summary}</ReactMarkdown>
              </div>
            </div>
          )}
        </CardContent>

        <CardFooter className="flex justify-between text-xs text-gray-600 border-t border-gray-300 pt-4">
          <p>Powered by Gemini AI</p>
          <p>{selectedFile ? `File size: ${(selectedFile.size / 1024 / 1024).toFixed(2)} MB` : ""}</p>
        </CardFooter>
      </Card>
    </div>
  );
}
