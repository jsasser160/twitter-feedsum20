import React from 'react';
import { List, Image, } from 'semantic-ui-react';

const TweetsList = ({ tweets }) => (
  <List divided relaxed>
    { tweets.map( tweet =>
      <List.Item key={tweet.id}>
        <Image avatar src={tweet.user.profile_image_url} />
        <List.Content>
          <List.Header>{tweet.user.name}</List.Header>
          <List.Content>{tweet.text}</List.Content>
          <List.Description>
            <a href={tweet.user.url} target="_blank">@{tweet.user.screen_name}</a>
          </List.Description>
        </List.Content>
      </List.Item>
    )}
  </List>
)
export default TweetsList;