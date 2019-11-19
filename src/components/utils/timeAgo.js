const timeAgo = (created_at) => {
  if(!created_at) return null;
  const timeInSeconds = created_at.seconds;
  const timeNow = Date.now() / 1000;
  const timeDiff = timeNow - timeInSeconds;

  const secondsEquivalents = {
    year: 60 * 60 * 24 * 30 * 12,
    month: 60 * 60 * 24 * 30,
    day: 60 * 60 * 24,
    hour: 60 * 60,
    minute: 60,
    second: 1,
  }

  if (timeDiff <= 1) {
    return `Just now`
  }

  for (let key in secondsEquivalents) {
    if (timeDiff >= secondsEquivalents[key]) {
      const value = Math.round(timeDiff / secondsEquivalents[key]);
      if (value === 1) {
        return `${value} ${key} ago`
      }

      return `${value} ${key}s ago`
    }
  }
};

export default timeAgo;