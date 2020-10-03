arr=[4,1,8,6,3]

function calMax(arr,i=0,max=Number.MIN_VALUE)
{
    if(i==arr.length)
        return max;
    else
    {
        if(arr[i]>max)
            max=arr[i];
        
        return calMax(arr,i+1,max);
    }
}

console.log(calMax(arr));