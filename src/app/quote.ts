export class Quote {
    
        showDetails: boolean;
        constructor(public id: number,public name: string,public details: string,public Uname: string,public upvote: number,public downvote: number ,public createdDate:Date){
          this.showDetails=false;
      
      }
}
