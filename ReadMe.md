A coding project using d3.js and tree diagrams. The objective was to ensure that the tree diagram maintains nice spacing at each depth layer: that is, the nodes won't overlap and decrease readability. 

My solution for this was to simply close out a branch that wasn't in use: that way, there will be ample space to float new branches. There are some flaws to this approach, one being that you can't decide which branch closes, which is occasionally annoying. My other method, however (see the extra page of code) ended up highly flawed, and so I was forced to adopt this much simpler approach.

In addition, I designed the code so that users can upload their own JSON files and view the results, so long as the JSON files are appropriately formatted for d3.js. In the works is the ability to sort by size (only for leaf nodes, these being nodes without children).

