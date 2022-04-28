import * as React from "react";
import { Banner } from "..";

export default function ButtonExample() {
  return (
    <Banner
      kind="informative"
      title="Title"
      description="Description"
      action={{
        label: "OK",
        onPress: () => window.alert("Action"),
      }}
    />
  );
}
