export interface Patient {
  id: string;
  name: string;
  gender: 'M' | 'F';
  birthDate: string;
  isForwarded: boolean;
  events?: Event[];
  createdAt: string;
  updatedAt: string;
}

export interface Event {
  text: string;
  biomarkers?: {
    hemorrhage?: boolean;
    thrombus?: boolean;
  };
  createdAt: string;
}
