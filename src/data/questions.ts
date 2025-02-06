import { Question } from '../types';

export const questions: Question[] = [
  {
    id: 'flex_1',
    type: 'multiple',
    category: 'flexibility',
    content: '新しい方法や手順を提案されたとき、あなたはどのように反応することが多いですか？',
    options: [
      { 
        id: 'f1_1', 
        text: '積極的に試してみたいと思う', 
        value: 5 
      },
      { 
        id: 'f1_2', 
        text: '慎重に検討してから判断する', 
        value: 3 
      },
      { 
        id: 'f1_3', 
        text: '現状の方法で問題ないと考える', 
        value: 1 
      }
    ],
    weight: 1
  },
  {
    id: 'aware_1',
    type: 'multiple',
    category: 'awareness',
    content: '自分の感情が大きく動いているとき、それを認識できていますか？',
    options: [
      { 
        id: 'a1_1', 
        text: '常に明確に認識できている', 
        value: 5 
      },
      { 
        id: 'a1_2', 
        text: 'ときどき気づくことがある', 
        value: 3 
      },
      { 
        id: 'a1_3', 
        text: '後から振り返って気づくことが多い', 
        value: 1 
      }
    ],
    weight: 1.5
  },
  {
    id: 'think_1',
    type: 'multiple',
    category: 'thinking',
    content: '問題に直面したとき、どのようなアプローチをとることが多いですか？',
    options: [
      { 
        id: 't1_1', 
        text: '多角的に分析して解決策を考える', 
        value: 5 
      },
      { 
        id: 't1_2', 
        text: '過去の経験から解決策を探る', 
        value: 3 
      },
      { 
        id: 't1_3', 
        text: '直感的に判断する', 
        value: 1 
      }
    ],
    weight: 1.4
  },
  {
    id: 'subcon_1',
    type: 'multiple',
    category: 'subconscious',
    content: '「絶対に」「必ず」「〜すべき」といった言葉をよく使いますか？',
    options: [
      { 
        id: 's1_1', 
        text: 'ほとんど使わない', 
        value: 5 
      },
      { 
        id: 's1_2', 
        text: 'ときどき使う', 
        value: 3 
      },
      { 
        id: 's1_3', 
        text: 'よく使う', 
        value: 1 
      }
    ],
    weight: 1.5
  },
  {
    id: 'rel_1',
    type: 'multiple',
    category: 'relationships',
    content: '初対面の人に対して、どのような先入観を持ちやすいですか？',
    options: [
      { 
        id: 'r1_1', 
        text: '先入観を持たないように意識している', 
        value: 5 
      },
      { 
        id: 'r1_2', 
        text: '外見や第一印象で判断することがある', 
        value: 3 
      },
      { 
        id: 'r1_3', 
        text: '過去の経験から類推することが多い', 
        value: 1 
      }
    ],
    weight: 1.2
  }
];

// カテゴリーの定義
export const categories = {
  flexibility: {
    name: '思考の柔軟性',
    description: '新しい視点や変化に対する適応力を評価します',
    weight: 1.0
  },
  awareness: {
    name: '自己認識',
    description: '自己認識の正確さと深さを測定します',
    weight: 1.2
  },
  thinking: {
    name: '思考パターン',
    description: '思考プロセスの特徴と傾向を分析します',
    weight: 1.1
  },
  subconscious: {
    name: '潜在意識',
    description: '潜在的な思考パターンや信念を探ります',
    weight: 1.3
  },
  relationships: {
    name: '対人関係',
    description: '対人関係における思い込みの影響を評価します',
    weight: 1.0
  }
};

// 評価基準
export const evaluationCriteria = {
  flexibility: {
    high: '柔軟な思考ができており、新しい視点を受け入れる準備ができています。',
    medium: '状況に応じて柔軟に対応できますが、時として固定観念に縛られることがあります。',
    low: '既存の考え方に固執する傾向があり、新しい視点を取り入れることに抵抗があるかもしれません。'
  },
  awareness: {
    high: '自己認識が高く、自分の思考や感情を客観的に観察できています。',
    medium: '自己認識はある程度できていますが、さらなる深い洞察の余地があります。',
    low: '自己認識をより深めることで、新たな気づきが得られる可能性があります。'
  },
  thinking: {
    high: '論理的で体系的な思考ができており、多角的な視点で物事を捉えることができます。',
    medium: '基本的な思考パターンは確立していますが、より深い分析が有効かもしれません。',
    low: '思考パターンの幅を広げることで、より豊かな視点が得られる可能性があります。'
  }
};

// 結果の解釈基準
export const scoreRanges = {
  high: { min: 80, description: '高度な自己認識と柔軟な思考が見られます' },
  medium: { min: 60, description: '基本的な自己認識はできていますが、改善の余地があります' },
  low: { min: 0, description: 'より意識的な自己観察が推奨されます' }
};

export default questions;