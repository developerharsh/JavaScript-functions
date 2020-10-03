arr=[4,1,8,6,3,-3]

function calMin(arr,i=0,min=Number.MAX_VALUE)
{
    if(i==arr.length)
        return min;
    else
    {
        if(arr[i]<min)
            min=arr[i];
        
        return calMin(arr,i+1,min);
    }
}

console.log(calMin(arr));