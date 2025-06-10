'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';

import sweepIcon from 'assets/icon/icon_android_foreground.png'
import Image from 'next/image';
import Link from 'next/link';
import { 
  Smartphone, 
  MapPin, 
  Heart, 
  Award, 
  Users, 
  Trash2,
  ListTodo,
  ExternalLink
} from 'lucide-react';

export default function Home() {
  const [isApplied, setIsApplied] = useState(false);

  const handleApply = () => {
    setIsApplied(true);
    window.location.href = 'https://forms.gle/6t1LvdqPnZGaNgjg8';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-cyan-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-blue-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-white-500 to-blue-600 rounded-lg flex items-center justify-center">
                <Image src ={sweepIcon} alt='SweepLogo'/>
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
                Sweep
              </h1>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">機能</a>
              <a href="#apply" className="text-gray-600 hover:text-blue-600 transition-colors">申込み</a>
              <a href="#faq" className="text-gray-600 hover:text-blue-600 transition-colors">FAQ</a>
              <Link href="/feedback" className="text-gray-600 hover:text-blue-600 transition-colors">フィードバック</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
        <Badge variant="outline" className="mb-6 bg-blue-100 text-blue-700 border-blue-300">
          🌊 テスター募集中
        </Badge>
        <h2 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
          <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 bg-clip-text text-transparent">
            みんなで作る
          </span>
          <br />
          <span className="text-gray-800">スマートシティー</span>
        </h2>
        <p className="text-xl text-gray-600 mb-4 max-w-2xl mx-auto leading-relaxed">
          スマートフォンアプリとスマートゴミ箱で、大津市のポイ捨て問題を解決。
          あなたもSweeperになってきれいなスマートシティーに！
        </p>
        <p className="text-md text-gray-500 mb-8">
          テスト期間: 約2週間（6/24まで）
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-3"
            onClick={() => document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' })}
          >
            テスターに申し込む
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-blue-300 text-blue-700 hover:bg-blue-50 px-8 py-3"
            onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
          >
            詳しく見る
          </Button>
        </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h3 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-800">
                Sweepの主な機能
              </h3>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                最新のテクノロジーで、ゴミ拾いをより楽しく、効果的に
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-blue-50">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Smartphone className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-blue-800">ゴミ情報の投稿</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    ゴミを見つけたら写真とコメントで投稿。位置情報も自動で記録され、他のユーザー、大津市と情報を共有できます。
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-indigo-50">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-indigo-800">インタラクティブマップ</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    投稿されたゴミの位置やスマートゴミ箱の設置場所を地図上で確認。
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-cyan-50">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-cyan-800">ポイントシステム</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    ゴミ拾いやゴミ箱の利用でポイントGET！貯まったポイントは地域オリジナルグッズと交換できます。
                  </p>
                  <p className="text-red-500">
                    ※今回のテストではポイント交換はありません
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-purple-50">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-purple-800">コミュニティ機能</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    タイムラインで他のユーザーの活動をチェック！一緒に街をキレイにしましょう。
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-teal-50">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-teal-800">簡単認証</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    GoogleまたはAppleアカウントで簡単ログイン。面倒な会員登録は不要で、すぐに始められます。
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-emerald-50">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Trash2 className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-emerald-800">スマートゴミ箱連携</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    IoT技術を活用したSwapBoxとの連携で、ゴミの重量を自動測定。QRコード読み取りでポイント付与も自動化。
                  </p>
                  <p className="text-red-500">
                    ※今回のテストではSwapBoxの提供はありません
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Social Impact Section
      <section id="impact" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl lg:text-4xl font-bold mb-8 text-gray-800">
              社会的インパクト
            </h3>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">85%</div>
                <p className="text-gray-600">ポイ捨て問題への関心向上</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="text-3xl font-bold text-indigo-600 mb-2">3.2倍</div>
                <p className="text-gray-600">ゴミ拾い参加率の向上</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="text-3xl font-bold text-cyan-600 mb-2">92%</div>
                <p className="text-gray-600">ユーザー満足度</p>
              </div>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
              「参加方法がわからない」「一人では参加しづらい」「忙しくて時間がない」
              といった従来の課題を解決し、テクノロジーの力で誰もが気軽に街の美化活動に
              参加できる環境を実現します。
            </p>
          </div>
        </div>
      </section> */}

      {/* Simple Application Section */}
      <section id="apply" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-12">
              <h3 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-800">
                テスター申込み
              </h3>
              <p className="text-xl text-gray-600 mb-8">
                Sweepの開発にご協力いただけるテスターを募集しています
              </p>
            </div>

            <Card className="shadow-xl border-0 bg-gradient-to-br from-white to-blue-50 p-8">
              <CardContent className="space-y-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-800 mb-4">
                    テスター申込み
                  </h4>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    下のボタンをクリックした後フォームに回答していただきその後こちらからメールを送らせていただきます
                  </p>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h5 className="font-semibold text-blue-800 mb-3">テスターのタスク</h5>
                  <ul className="text-sm text-blue-700 space-y-2">
                    <li className="flex items-center">
                      <ListTodo className="w-4 h-4 mr-2" />
                      ゴミを見つけて投稿
                    </li>
                    <li className="flex items-center">
                      <ListTodo className="w-4 h-4 mr-2" />
                      アプリのバグを見つける
                    </li>
                    <li className="flex items-center">
                      <ListTodo className="w-4 h-4 mr-2" />
                      アプリ内からフィードバックを送信
                    </li>
                  </ul>
                </div>

                <Button
                  onClick={handleApply}
                  className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-4 text-lg font-semibold"
                >
                  <ExternalLink className="w-5 h-5 mr-2" />
                  テスターに申し込む
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-800">
                よくある質問
              </h3>
              <p className="text-xl text-gray-600">
                テスター参加について気になる点をまとめました
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-white rounded-lg px-6 border-0 shadow-sm">
                <AccordionTrigger className="text-left font-medium">
                  テスターになるのに費用はかかりますか？
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  いいえ、テスター参加は完全無料です。アプリの利用も無料でご利用いただけます。
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-white rounded-lg px-6 border-0 shadow-sm">
                <AccordionTrigger className="text-left font-medium">
                  テスター期間はどのくらいですか？
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  テスター期間は約2週間（6/21まで）を予定しています。期間中はフィードバックをお願いし、アプリの改善に活用させていただきます。
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-white rounded-lg px-6 border-0 shadow-sm">
                <AccordionTrigger className="text-left font-medium">
                  大津市以外の地域でも参加できますか？
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  基本的には大津市内でのご利用を想定しておりますが、滋賀県内での投稿も歓迎いたします。
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-white rounded-lg px-6 border-0 shadow-sm">
                <AccordionTrigger className="text-left font-medium">
                  どの程度の時間的コミットメントが必要ですか？
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  日常の散歩や通勤・通学の際にアプリを使っていただき、ゴミの投稿をしていただきたいと考えております。
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-white rounded-lg px-6 border-0 shadow-sm">
                <AccordionTrigger className="text-left font-medium">
                  個人情報の取り扱いについて教えてください
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  収集した個人情報は本プロジェクトの改善のみに使用し、第三者への提供は行いません。位置情報は統計的な分析にのみ使用し、個人を特定できる形では保存いたしません。
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="bg-white rounded-lg px-6 border-0 shadow-sm">
                <AccordionTrigger className="text-left font-medium">
                  申込み後の流れを教えてください
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  申込み後、2日以内に詳細な案内メールをお送りします。その後、アプリのダウンロード方法、フィードバック方法などをご案内いたします。
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-white-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <Image src ={sweepIcon} alt='SweepLogo'/>
                  </div>
                  <h4 className="text-xl font-bold">Sweep</h4>
                </div>
                <p className="text-gray-400 leading-relaxed">
                  テクノロジーの力で地域のポイ捨て問題を解決し、みんなで作るキレイな街を実現します。
                </p>
              </div>
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <h4 className="text-xl font-bold">Sweep リポジトリ</h4>
                </div>
                <p className="text-gray-400 leading-relaxed">
                  <a href="https://github.com/Chika0221/Sweep" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">
                  リポジトリを見る
                  </a>
                </p>
              </div>
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <h4 className="text-xl font-bold">Sweep-host リポジトリ</h4>
                </div>
                <p className="text-gray-400 leading-relaxed">
                  <a href="https://github.com/Chika0221/Sweep-host" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">
                  リポジトリを見る
                  </a>
                </p>
              </div>
              
              
            </div>
            
            <div className="border-t border-gray-800 mt-8 pt-8 text-center">
              <p className="text-gray-400">
                © 2024 Sweep Project. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}