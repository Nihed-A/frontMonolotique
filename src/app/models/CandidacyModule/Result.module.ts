import { User } from '../UserModule/User.module';
import { StudentSpeciality } from '../UserModule/StudentSpeciality';

export class Result {
    idResult!: number;
    pl!: number;
    dataMining!: number;
    springBoot!: number;
    angular!: number;
    dotnet!: number;
    english!:number;
    french!: number;
    math!: number;
    date!: Date;
    generalAverage!: number;
    score!: number;
    studentSpeciality!: StudentSpeciality;
    
    user!: User;

  
  }