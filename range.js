function range(start,end,skip=1,ret=[],i=0)
{
    if(skip>0)
    {
        if(i==0 && start<end)
        {
            ret[i]=start;
            return range(start,end,skip,ret,i+1);
        }
        else if(ret[i-1]+skip>=end || start>end)
            return ret;
        else
        {
            ret[i]=ret[i-1]+skip;
            return range(start,end,skip,ret,i+1);
        }
    }
    else
    {
        if(i==0 && start>end)
        {
            ret[i]=start;
            return range(start,end,skip,ret,i+1);
        }
        else if(ret[i-1]+skip<=end || start<end)
            return ret;
        else
        {
            ret[i]=ret[i-1]+skip;
            return range(start,end,skip,ret,i+1);
        }
    }
}

console.log(range(20,10,-1));