const DateRange = ({startYear, endYear, id}) => {
  const lang = 'en-US'

  if (!startYear) {
    return <p id={id} className="sub-content"></p>;
  }

  const start = new Date(startYear);
  const startStr = `${start.toLocaleString(lang, {month: 'short'})} ${start.getFullYear()}`
  const end = new Date(endYear);
  const hasEnd = endYear && !Number.isNaN(end.getTime());
  const endStr = hasEnd
    ? `${end.toLocaleString(lang, {month: 'short'})} ${end.getFullYear()}`
    : 'Present'

  return (
    <p id={id} className="sub-content whitespace-nowrap">
      <time dateTime={startYear}>{startStr}</time>
      {" — "}
      {hasEnd ? <time dateTime={endYear}>{endStr}</time> : endStr}
    </p>
  );
};

export default DateRange;
