export class CampainModel {
  id?: number;
  name?: string;
  status?: boolean;
  quantity?: number;
  advertisement?: Advertisement[] = [];
  constructor() {}
}

export interface Advertisement {
  id?: number;
  name?: string;
  quantity?: number;
}
