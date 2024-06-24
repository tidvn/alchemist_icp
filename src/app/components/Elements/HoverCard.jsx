import React from "react";
import * as RadixHoverCard from "@radix-ui/react-hover-card";

const HoverCard = ({ content, children }) => (
  <RadixHoverCard.Root openDelay={150}>
    <RadixHoverCard.Trigger asChild>{children}</RadixHoverCard.Trigger>

    <RadixHoverCard.Portal>
      <RadixHoverCard.Content className="HoverCardContent" sideOffset={5}>
        <RadixHoverCard.Arrow className="HoverCardArrow" />
        {content}
      </RadixHoverCard.Content>
    </RadixHoverCard.Portal>
  </RadixHoverCard.Root>
);

export default HoverCard;
