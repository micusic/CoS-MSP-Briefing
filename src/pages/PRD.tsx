import React, { useState } from 'react';
import Markdown from 'react-markdown';
import { prdData } from '../data/prd';
import { cn } from '../lib/utils';

export default function PRDPage() {
  const [lang, setLang] = useState<'en' | 'zh'>('en');

  return (
    <div className="max-w-4xl mx-auto p-8 lg:p-12">
      <div className="flex justify-between items-center mb-8 pb-6 border-b border-neutral-200">
        <h1 className="text-3xl font-bold tracking-tight text-neutral-900">
          Product Requirements Document
        </h1>
        <div className="flex p-1 bg-neutral-100 rounded-lg border border-neutral-200">
          <button
            onClick={() => setLang('en')}
            className={cn(
              "px-4 py-1.5 text-sm font-medium rounded-md transition-all",
              lang === 'en' ? "bg-white text-neutral-900 shadow-sm" : "text-neutral-500 hover:text-neutral-700"
            )}
          >
            English
          </button>
          <button
            onClick={() => setLang('zh')}
            className={cn(
              "px-4 py-1.5 text-sm font-medium rounded-md transition-all",
              lang === 'zh' ? "bg-white text-neutral-900 shadow-sm" : "text-neutral-500 hover:text-neutral-700"
            )}
          >
            中文
          </button>
        </div>
      </div>

      <div className="prose prose-neutral prose-indigo max-w-none">
        <Markdown>{prdData[lang]}</Markdown>
      </div>
    </div>
  );
}
