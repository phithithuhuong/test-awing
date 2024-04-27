export class CampainModel {
  id?: number;
  name?: string;
  errName? : number;
  status?: boolean;
  quantity?: number;
  advertisement?: Advertisement[] = [];
  constructor() {}
}

export class Advertisement {
  id?: number;
  name?: string;
  quantity?: number | string;
  err_quantity?: number ;
  err_name?: number;
  is_checked ?: boolean = false; 

 
}
