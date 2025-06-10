'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

// ダミーデータ（実際のアプリケーションではAPIから取得）
const dummyFeedbackResponses: any[] = [
  
];

const getFeedbackTypeDisplay = (type: string) => {
  switch (type) {
    case "bug":
      return "バグ報告";
    case "feature_request":
      return "機能要望";
    case "improvement":
      return "改善提案";
    case "other":
      return "その他";
    default:
      return type;
  }
};

const getStatusBadgeVariant = (status: string) => {
  switch (status) {
    case "open":
      return "destructive";
    case "under_consideration":
      return "secondary";
    case "planned":
      return "default";
    case "closed":
      return "outline";
    default:
      return "default";
  }
};

const getStatusDisplay = (status: string) => {
  switch (status) {
    case "open":
      return "受付中";
    case "under_consideration":
      return "検討中";
    case "planned":
      return "対応予定";
    case "closed":
      return "対応済み";
    default:
      return status;
  }
};

export default function FeedbackResponsesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-cyan-50 py-12">
      <div className="container mx-auto px-4">
        <Card className="shadow-xl border-0 bg-gradient-to-br from-white to-blue-50">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
              フィードバック一覧
            </CardTitle>
          </CardHeader>
          <CardContent>
            {dummyFeedbackResponses.length > 0 ? (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[150px]">種類</TableHead>
                    <TableHead>詳細</TableHead>
                    <TableHead className="w-[180px]">送信日時</TableHead>
                    <TableHead className="w-[120px] text-center">ステータス</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {dummyFeedbackResponses.map((feedback) => (
                    <TableRow key={feedback.id}>
                      <TableCell className="font-medium">
                        {getFeedbackTypeDisplay(feedback.type)}
                      </TableCell>
                      <TableCell>{feedback.details}</TableCell>
                      <TableCell>
                        {new Date(feedback.submittedAt).toLocaleString('ja-JP')}
                      </TableCell>
                      <TableCell className="text-center">
                        <Badge variant={getStatusBadgeVariant(feedback.status)}>
                          {getStatusDisplay(feedback.status)}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            ) : (
              <div className="text-center py-12 text-gray-500">
                <p className="text-xl">現在、フィードバックはありません。</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
