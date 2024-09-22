

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };
  return date.toLocaleDateString('en-US', options);
}

export function formatCommentData(dataString: string): string {
  // Create a new Date object from the timestamp
  const date = new Date(dataString);

  // Create options for formatting
  const options = {
    year: "numeric",
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  };

  // Format the date using Intl.DateTimeFormat
  return new Intl.DateTimeFormat('en-US', options).format(date);
}