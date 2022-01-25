export const FormateDate = (date: Date): string => {
  let now = new Date();
  let nowDay = now.getDay();
  let nowMonth = now.getMonth() + 1;
  let nowYear = now.getFullYear();

  return `${addZero(nowDay)}/${addZero(nowMonth)}/${nowYear}`;
};

function addZero(number: number): string {
  if(number < 10){
      return `0${number}`
  }
  else{
      return `${number}`
  }
}