declare module '*.png' {
  const value: any;
  export = value;
}

interface CurrentUser {
  id: number;
  email: string;
  createdAt: string;
  updatedAt: string;
}

interface Question {
  createdAt?: string;
  updatedAt?: string;
  id?: number;
  quizId?: number;
  answer: string;
  content: string;
}

interface Quiz {
  createdAt?: string;
  id?: number;
  name: string;
  public: boolean;
  questions: Question[];
  updatedAt?: string;
  userId?: number;
}

type ContentType = 'quizNew' | 'quizEdit' | 'quizzesIndex' | 'home' | string;
