export class Activity  {
    activity: string;
    type: string;
    participants: number;
    price: number;
    link: string;
    key: string;
    accessibility: number;
};


let data: Activity[] = [];

async function getData(){

    const response = await fetch('https://www.boredapi.com/api/activity');

    if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
    }

    const result = (await response.json()) as Activity;

   data.push(result);
   data.map(result => console.log('result is: ', JSON.stringify(result, null, 4)));

   makeUL();
}

function makeUL() {
    const listSection = document.getElementById("listSection");
    const li = document.createElement("li");
    li.textContent = data.pop().activity;
    listSection?.appendChild(li);
}




