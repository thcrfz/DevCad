export type UserData = {
  id: number;
  email: string;
  password: string;
  created_at: string;
  updated_at: string;
  developer: DeveloperData;
};

export type DeveloperData = {
  id: number;
  name: string;
  email: string;
  age: string;
  url: string;
  userID: number;
  created_at: string;
  updated_at: string;
  languageModels: LanguageData;
};

export type LanguageData = [
  {
    id: number;
    name: string;
    developerID: number;
    created_at: string;
    updated_at: string;
  },
];
