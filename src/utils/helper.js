function compareTime(t1, t2)
{
    const dateTime1 =new Date(t1);
    const dateTime2 =new Date(t2);
    return dateTime1.getTime() > dateTime2.getTime();
}

module.exports ={
     compareTime
    }