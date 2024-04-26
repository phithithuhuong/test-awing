export class CampainModel {
  id?: number;
  name?: string;
  status?: boolean;
  quantity?: number;
  advertisement?: Advertisement[] = [];
  constructor() {}
}

export class Advertisement {
  id?: number;
  name?: string;
  quantity?: number;
  is_checked ?: boolean = false; 

 
}
