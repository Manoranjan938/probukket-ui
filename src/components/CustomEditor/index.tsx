import JoditEditor from "jodit-react";
import { useRef, type ReactElement } from "react";

const Editor = (): ReactElement => {
  const innerRef = useRef(null);

  return (
    <section className="editor_section">
      <JoditEditor value="" ref={innerRef} />
    </section>
  );
};

export default Editor;
