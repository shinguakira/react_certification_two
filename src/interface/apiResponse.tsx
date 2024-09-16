export interface Questions {
  id: string;
  name: string;
}
export interface ApiResponse {
  Questions: Questions[];
}

type exmapleFunction = (input:number) =>boolean;