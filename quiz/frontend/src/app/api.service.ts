import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Subject } from 'rxjs';

@Injectable()
export class ApiService{

    private selectedQuestion = new Subject<any>();
    questionSelected = this.selectedQuestion.asObservable();
    constructor (private http : HttpClient){};

    getQuestions(){
        return this.http.get ('https://localhost:44319/api/Questions');
    }

    postQuestion(question){
        this.http.post ('https://localhost:44319/api/Questions',question).subscribe(res =>{
            console.log(res);
        })
    }

    putQuestion(question){
        this.http.put (`https://localhost:44319/api/Questions/${question.id}`,question).subscribe(res =>{
            console.log(res);
        })
    }

    selectQuestion(question){
        this.selectedQuestion.next(question);
    }
}