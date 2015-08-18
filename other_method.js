    console.info(nodes)
    // Note: Implementation could be inefficient since it goes through the whole tree on each update, instead of just checking the section of the tree that's being updated. However, it doesn't need to check unopened children, so in that respect it has advantages, particularly in the case of single user use, where the user is unlikely to have enough nodes open to experience lag as a result of this method.
    node_counter = {};
    function count_children (_source)
    {
      var depth = _source.depth + 1;
      if (_source.children)
      {
        var children = _source.children
        // Breadth-wise: store each level as depth
        if (!node_counter[depth])
        {
          node_counter[depth] = [];
        }
        level = node_counter[depth]
        level.push(children);
        node_counter[depth] = level
        flat_arr = [].concat.apply([], node_counter[depth]);
        flat_arr.forEach(function (node) { count_children(node) });
      } 
    }
    
    count_children(nodes[nodes.length-1]);

    for (var j=0;j < Object.keys(node_counter).length; j++)
    {
      var group_list = node_counter[Object.keys(node_counter)[j]];
      neighbor_spacing = 0;
      diff_array_spacing = -24;
      for (li in group_lissst)
      {
        diff_array_spacing += 24;
        neighbor_spacing += 12 * li.length;
      }
      var total_height_nodes = 12 * (([].concat.apply([], group_list)).length);
      var total_spacing = neighbor_spacing + diff_array_spacing + total_height_nodes;
      console.log (Object.keys(node_counter)[j], " with total_spacing ", total_spacing)
      function over_node_limit (m)
      {
        if (total_spacing > height)
        {
          // should give us number of nodes to remove
          var over_node_lim = parseInt((total_spacing-height) / 24);

          var removeFromGroup = group_list[m];
          var done = remove_child_nodes(removeFromGroup, over_node_lim);
          if (done != 0)
          {
            m += 1;
            console.log('second iteration');
            over_node_limit(m);
          }
        }
      }
      over_node_limit(0)
    }

    function remove_child_nodes(listOfNodes, numberToRemove)
    {
      console.log("in remove child. Removing ", numberToRemove, " nodes. ", listOfNodes)
      for (var p=0; p<listOfNodes.length; p++)
      {
        var _node = listOfNodes[p]
        if (numberToRemove <= p) 
        { 
          var leftToRemove = 0;
          return leftToRemove; 
        }
        // Should hash nodes array
        nodes.forEach(function (node, index)
        {
          if (node.id == _node.id)
          {
            collapse(node.parent);
          }
        })
      }
      // would have exited earlier if we were done.
      leftToRemove = numberToRemove - (p+1)
      return leftToRemove
    }
