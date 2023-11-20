import useGenres from "../hooks/useGenres";

const GenreList = () => {
  const { genre } = useGenres();
  return (
    <ul>
      {genre.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
