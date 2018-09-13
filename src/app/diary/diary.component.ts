import { Component, OnInit } from '@angular/core';
import {Diary} from '../diary';
@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.css']
})
export class DiaryComponent implements OnInit {
diary = [
  new Diary(1,'cyber security','We live in a world where all wars will begin as cyber wars',new Date(2018,9,11) ),
  new Diary(2,'entrepreneurship','it’s impossible to do everything or know everything. That’s why it’s important to build a network of people to guide you, support you and encourage you.',new Date(2018,9,11) ),
  new Diary(3,'solving problems through tech','Mobile phones , applications such as WhatsApp and VoIP or Voice over Internet protocol are only some of the reasons why long distant charges are a thing of the past.',new Date(2018,9,11) ),
]
addNewDiary(diary){
       let diaryLength = this.diary.length;
       diary.id=diaryLength+1;
       diary.addedDate = new Date(diary.addedDate)
       this.diary.push(diary)

   }
toogleDetails(index){
        this.diary[index].showDescription = !this.diary[index].showDescription;
    }

    deleteGoal(isComplete,index){
        if (isComplete){
            let toDelete=confirm(`Are you sure you want to delete ${this.diary[index].name}`)

            if(toDelete){
                this.diary.splice(index,1)
            }
        }
    }
  constructor() { }

  ngOnInit() {
  }

}
