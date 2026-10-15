import React from 'react';
import DateRange from "../../../../utility/DateRange";
import dynamic from "next/dynamic";

const Droppable = dynamic(
  () => import("@hello-pangea/dnd").then((mod) => mod.Droppable),
  {ssr: false}
);
const Draggable = dynamic(
  () => import("@hello-pangea/dnd").then((mod) => mod.Draggable),
  {ssr: false}
);

const WorkExperience = ({item, index}) => {
  return (
    <Draggable
      key={`${item.company}-${index}`}
      draggableId={`WORK_EXPERIENCE-${index}`}
      index={index}
    >
      {(provided, snapshot) => (
        <article
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={`resume-job mb-2 ${
            snapshot.isDragging &&
            "outline-dashed outline-2 outline-gray-400 bg-white"
          }`}
        >
          <div className="resume-job-heading">
            <div className="flex flex-row justify-between items-baseline gap-2">
              <h3 className="content i-bold">{item.position}</h3>
              <DateRange
                startYear={item.startYear}
                endYear={item.endYear}
                id={`work-experience-start-end-date-${index}`}
              />
            </div>
            <p className="content">{item.company}</p>
          </div>
          {item.description && (
            <p className="content hyphens-auto">{item.description}</p>
          )}

          <Droppable
            droppableId={`WORK_EXPERIENCE_KEY_ACHIEVEMENT-${index}`}
            type="WORK_EXPERIENCE_KEY_ACHIEVEMENT"
          >
            {(provided) => (
              <ul
                className="list-disc ul-padding content"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {typeof item.keyAchievements === "string" &&
                  item.keyAchievements
                    .split("\n")
                    .map((achievement, subIndex) => (
                      <Draggable
                        key={`${item.company}-${index}-${subIndex}`}
                        draggableId={`WORK_EXPERIENCE_KEY_ACHIEVEMENT-${index}-${subIndex}`}
                        index={subIndex}
                      >
                        {(provided, snapshot) => (
                          <li
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className={`
                                          hover:outline-dashed hover:outline-2 hover:outline-gray-400
                                          ${
                              snapshot.isDragging &&
                              "outline-dashed outline-2 outline-gray-400 bg-white"
                            }`}
                          >
                            <div
                              dangerouslySetInnerHTML={{
                                __html: achievement,
                              }}
                              contentEditable
                            />
                          </li>
                        )}
                      </Draggable>
                    ))}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
          {item.tools && (
            <p className="sub-content mt-0.5">
              <span className="i-bold">Tools &amp; Technologies: </span>
              {item.tools}
            </p>
          )}
        </article>
      )}
    </Draggable>
  );
};

export default WorkExperience;
