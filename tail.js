let arr=[1,2,3,4];

function retTail(arr,beg=0,retArr=[])
{
    if(beg==0)
        return retTail(arr,1,retArr);
    else if(beg+1>arr.length)
        return retArr;
    else
    {
        retArr[beg-1]=arr[beg];
        return retTail(arr,beg+1,retArr);
    }
}

console.log(retTail(arr));