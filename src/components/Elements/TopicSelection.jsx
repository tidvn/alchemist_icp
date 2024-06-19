"use client";
import React, { useState } from "react";
import { Button } from "flowbite-react";

const noop = () => {};

const Topic = ({ topic, isSelected, onSelectTopic = noop }) => {
  return (
    <Button
      pill
      size="sm"
      color={isSelected ? "info" : "light"}
      outline={!isSelected}
      onClick={() => onSelectTopic(topic)}
    >
      {topic.name}
    </Button>
  );
};

export default function TopicSelection({ topics }) {
  const [selectedTopic, setSelectedTopic] = useState(
    topics.length ? topics[0]?.id : null
  );

  return (
    <div className="flex flex-wrap items-center gap-4">
      {topics.map((topic) => (
        <Topic
          key={topic.id}
          topic={topic}
          isSelected={selectedTopic === topic.id}
          onSelectTopic={(topic) => setSelectedTopic(topic.id)}
        />
      ))}
    </div>
  );
}
