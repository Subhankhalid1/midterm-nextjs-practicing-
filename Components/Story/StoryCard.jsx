function StoryCard({ name, src, profile }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "6rem",
        overflowX: "auto",
        position: "relative",
        width: "8rem",
      }}
    >
      <img
        style={{
          borderRadius: "9999px",
          border: "3px solid #af2634;",
          height: "2.5rem",
          marginLeft: "8px",
          opacity: 100,
          position: "absolute",
          top: "0.75rem",
          width: "2.5rem",
          zIndex: "49",
        }}
        src={profile}
      />

      <p
        style={{
          bottom: "1rem",
          color: "#fff",
          fontSize: " 0.875rem",
          fontWeight: 600,
          fontWeight: 700,
          lineHeight: "1.25rem",
          opacity: 100,

          paddingLeft: "0.5rem",
          position: "absolute",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          width: "100%",
        }}
      >
        {name}
      </p>
    </div>
  );
}
export default StoryCard;
