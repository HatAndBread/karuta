declare module '*.png';

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

type ContentType = 'quizEdit' | 'quizzesIndex' | 'home' | string;
