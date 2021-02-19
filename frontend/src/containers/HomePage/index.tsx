import { Container } from "./styles";
import { DeveloperData } from "../../domain/posts/post";

export type HomePageProps = {
  developers: DeveloperData[];
};

export default function HomePage({ developers }: HomePageProps) {
  return (
    <Container>
      {developers.map((developer) => (
        <div key={developer.id}>
          <span>{developer.name}</span>
        </div>
      ))}
    </Container>
  );
}
