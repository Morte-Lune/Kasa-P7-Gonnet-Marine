/////////
// TAG //
////////

function Tag({ tags }) {
    
  return (
    <div className="blocTags">
      {tags.map((tag) => (
        <div className="blocTags__tag" key={tag}>
          {tag}
        </div>
      ))}
    </div>
  );
}

export default Tag;
