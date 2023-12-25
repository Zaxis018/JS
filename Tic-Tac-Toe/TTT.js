export class TTT_array{
    constructor(head,count,size=5){
        this.head=0;
        this.count=0;
        this.size=size;
        this.buffer=new Array(size).fill(null);
    }

   add_value(value){
    this.buffer[this.head]=value;
    this.head=(this.head +1);
   }
   get_value(){
    return this.buffer
   }
   get_sum(){
    const targetSum = 15;
    const r = 3;
    
    this.buffer = this.buffer.filter(item => item !== null);
    for (let i = 0; i < this.buffer.length - 2; i++) {
        for (let j = i + 1; j < this.buffer.length - 1; j++) {
            for (let k = j + 1; k < this.buffer.length; k++) {
                if (this.buffer[i] +this.buffer[j] + this.buffer[k] === targetSum) {
                    return true;
                }
            }
        }
    }
    return false;
   }
   clear(){
    this.buffer.fill(null);
   }
}
