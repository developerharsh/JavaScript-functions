let arr=[1,2,3,4,5];

function retInit(arr,i=0,ret=[])
{
    if(arr[i+1]==undefined)
        return ret;
    else
    {
        ret[i]=arr[i];
        return retInit(arr,i+1,ret);
    }
}

console.log(retInit(arr));