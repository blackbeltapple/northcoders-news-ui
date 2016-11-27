TO DO
Refactor to use multiple smaller reducers
Get Up/Down vote to work for Comments (only works for articles)
How to get the Active menu to style differently in NavBar and TopicBar
Read redux-router docs
VoteBox does not re-render even when change between topics - this is because I am using State to hold num votes but it does not know to change when you switch Topics?? Even though this does a full HTTP GET. If I stop using the state in VoteBox and use props instead, it will initially reder the correct num votes, but won't update correctly when you click up or down. 
Get Route to work correctly when go direct to this URL - e.g. http://localhost:8080/topics/cooking/articles
Get Route to work - http://localhost:8080/articles/article/583412925905f02e4c8e6e00
And http://localhost:8080/userlist/tickle122
WHat do the POST/PUT/DEL actions return? SHould I handle these?
Testing!!!!
