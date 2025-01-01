function checkMeetingTime(workStart, workEnd, meetingStart, meetingDuration) {
  const workStartTime = parseTime(workStart);
  const workEndTime = parseTime(workEnd);
  const meetingStartTime = parseTime(meetingStart);
  const meetingEndTime = meetingStartTime + meetingDuration;

  return (meetingStartTime >= workStartTime && meetingEndTime <= workEndTime);
}

function parseTime(timeStr) {
  const [hours, minutes] = timeStr.split(':').map(Number);
  return hours * 60 + minutes;
}

checkMeetingTime();
