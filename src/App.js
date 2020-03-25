import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TreeView from "@material-ui/lab/TreeView";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import TreeItem from "@material-ui/lab/TreeItem";
import "./styles.css";

const useStyles = makeStyles({
  root: {
    height: 216,
    flexGrow: 1,
    maxWidth: 400
  }
});

export default function App() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState([]);
  const [selected, setSelected] = React.useState([]);

  const handleToggle = (event, nodeIds) => {
    setExpanded(nodeIds);
  };

  const handleSelect = (event, nodeIds) => {
    setSelected(nodeIds);
  };

  const tree = [
    {
      id: 1,
      parent: "parent",
      child: "child",
      subChild: { name: "subparnt", index: "indx.js", about: "about.js" }
    },
    {
      id: 2,
      parent: "Scondparent",
      child: "Secondchild",
      subChild: {
        name: "Scondsubparnt",
        index: "Secondindx.js",
        about: "Scondabout.js"
      }
    },
    {
      id: 3,
      parent: "Thirdparent",
      child: "Thirdchild",
      subChild: {
        name: "Thirdsubparnt",
        index: "Thirdindx.js",
        about: "Thirdabout.js"
      }
    }
  ];
  return (
    <TreeView
      className={classes.root}
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
      expanded={expanded}
      selected={selected}
      onNodeToggle={handleToggle}
      onNodeSelect={handleSelect}
    >
      {tree.map(val => {
        return (
          <TreeItem nodeId={val.id} label={val.parent}>
            <TreeItem nodeId={val.child} label={val.child}>
              <TreeItem nodeId={val.subChild.name} label={val.subChild.name}>
                <TreeItem
                  nodeId={val.subChild.index}
                  label={val.subChild.index}
                />
                <TreeItem
                  nodeId={val.subChild.about}
                  label={val.subChild.about}
                />
              </TreeItem>
            </TreeItem>
          </TreeItem>
        );
      })}
    </TreeView>
  );
}
