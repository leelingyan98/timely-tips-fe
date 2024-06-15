import { format, differenceInSeconds, differenceInMinutes, differenceInHours, differenceInDays } from 'date-fns';

export function formatTimeAgo(timestamp) {
  const now = new Date();
  const time = new Date(timestamp);

  const diffSeconds = differenceInSeconds(now, time);
  const diffMinutes = differenceInMinutes(now, time);
  const diffHours = differenceInHours(now, time);
  const diffDays = differenceInDays(now, time);

  if (diffSeconds < 60) {
    return `${diffSeconds} s`;
  } else if (diffMinutes < 60) {
    return `${diffMinutes} mins`;
  } else if (diffHours < 24) {
    return `${diffHours}h`;
  } else if (diffDays < 2) {
    return '1d';
  } else {
    return format(time, 'd MMM yyyy p');
  }
}
