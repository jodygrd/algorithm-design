function mergeRanges(arr) {
    const finalMeetings = [];
    const sortedMeetings = arr.sort(a,b) => a.startTime - b.startTime)
    let currentEarliestStart = arr[0][startTime]
    let currentLatestEnd = arr[0][endTime]
    
    for (i=1; i < sortedMeetingstedMeetings.length; i++) {
        let meeting = sortedMeetings[i];
        if (meeting.startTime > currentLatestEnd) {
            finalMeetings.push([currentEarliestStart, currentLatestEnd])
            currentEarliestStart = meeting.startTime;
            currentLatestEnd = meeting.endTime;
        }
        if (meeting.endTime > currentLatestEnd) {
            currentLatestEnd = meeting.endTime
        }
        
    }
    
    finalMeetings.push([currentEarliestStart, currentLatestEnd])

    return finalMeetings;
    
}

//This solution is NOT the one recommended by Interview Cake (although it hs the same efficiency O(nlogn) from the sort, but I personally think it works great and meets all corner cases well 