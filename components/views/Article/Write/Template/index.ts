export const CREATE_FILM_UNIVERSE_ARTICLE_TEMPLATE = `<p>-------------------------------------------------------------------------------------------------------------------------------------------------------</p><p><span style="background-color: rgb(0, 0, 0); color: rgb(255, 255, 255);">"Film Universe 게시판은 제목, 내용, 이미지 파일 1개 이상이 필수 입니다. 현재 문구를 삭제해주시고 작성해주세요." 😊</span></p><p>-------------------------------------------------------------------------------------------------------------------------------------------------------</p>`

export const CREATE_CRITIC_ARTICLE_TEMPLATE = `<p>-------------------------------------------------------------------------------------------------------------------------------------------------------</p><p><span style="background-color: rgb(0, 0, 0); color: rgb(255, 255, 255);">"Critic 게시판은 제목, 내용, 이미지 파일 3개 이상이 필수 입니다. 현재 문구를 삭제해주시고 작성해주세요." 😊</span></p><p>-------------------------------------------------------------------------------------------------------------------------------------------------------</p>`

export const CREATE_MOVIE_ARTICLE_TEMPLATE = `<p>-------------------------------------------------------------------------------------------------------------------------------------------------------</p><p><span style="background-color: rgb(0, 0, 0); color: rgb(255, 255, 255);">"Movie 게시판은 제목, 내용이 필수 입니다. 현재 문구를 삭제해주시고 작성해주세요." 😊</span></p><p>-------------------------------------------------------------------------------------------------------------------------------------------------------</p>`

type TemplateObj = {
  [key: string]: string
}

export const templateObj: TemplateObj = {
  filmUniverse: CREATE_FILM_UNIVERSE_ARTICLE_TEMPLATE,
  critic: CREATE_CRITIC_ARTICLE_TEMPLATE,
  movie: CREATE_MOVIE_ARTICLE_TEMPLATE,
}
