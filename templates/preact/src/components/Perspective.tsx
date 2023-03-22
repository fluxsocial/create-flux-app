import { PerspectiveProxy } from "@perspect3vism/ad4m";
import { useEffect, useState } from "preact/hooks";

type Props = {
  perspective: PerspectiveProxy;
};

export default function Perspective({ perspective }: Props) {
  const [subjects, setSubjects] = useState([]);

  async function fetchneighbourhoods() {
    const subjectClasses = await perspective.subjectClasses();
    setSubjects([...new Set(subjectClasses)]);
  }

  useEffect(() => {
    if (perspective) {
      fetchneighbourhoods();
    }
  }, [perspective]);

  return (
    <div>
      <j-text variant="heading-lg">My First Flux App</j-text>
      <j-text variant="body">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
        nostrum placeat ea illo cumque sunt repellat eos! Quo omnis,
        perspiciatis corporis recusandae cum culpa reiciendis aliquam unde vero
        pariatur praesentium!
      </j-text>

      <j-box pt={400}>
        <j-text variant="heading-sm">Selected perspective:</j-text>
      </j-box>

      <div className="perspective">
        {perspective ? (
          <>
            <j-text variant="label">Name</j-text>

            <j-text variant="body" color="black">
              {perspective.name || "Untitled perspective"}
            </j-text>

            <j-text variant="label">Uuid</j-text>
            <j-text variant="body" color="black">
              {perspective.uuid}
            </j-text>

            <j-text variant="label">Shared URL</j-text>
            <j-text variant="body" color="black">
              {perspective.sharedUrl || "No shared URL"}
            </j-text>

            <j-text variant="label">Subject classes:</j-text>
            {(!subjects || subjects.length < 1) && (
              <j-text variant="body" color="black">
                No subject classes
              </j-text>
            )}
            <ul>
              {subjects?.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </>
        ) : (
          <>
            <j-text variant="body" nomargin>
              Select a perspective to see details
            </j-text>
          </>
        )}
      </div>
    </div>
  );
}
