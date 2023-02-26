import BackButton from '@/components/buttons/BackButton';
import Row from '@/components/layout/Row';
import seriesRequests from '@/utils/seriesRequests';

const fetchAllSeries = async () => {
  const [
    topRated,
    actionSeries,
    comedySeries,
    horrorSeries,
    romanceSeries,
    documentaries,
  ] = await Promise.all([
    fetch(seriesRequests.fetchTopRated).then((res) => res.json()),
    fetch(seriesRequests.fetchActionSeries).then((res) => res.json()),
    fetch(seriesRequests.fetchComedySeries).then((res) => res.json()),
    fetch(seriesRequests.fetchHorrorSeries).then((res) => res.json()),
    fetch(seriesRequests.fetchRomanceSeries).then((res) => res.json()),
    fetch(seriesRequests.fetchDocumentaries).then((res) => res.json()),
  ]);

  return {
    topRated,
    actionSeries,
    comedySeries,
    horrorSeries,
    romanceSeries,
    documentaries,
  };
};
const Page = async () => {
  const series = await fetchAllSeries();

  return (
    <>
      <div className="pl-4 sm:pl-8 md:pl-16">
        <BackButton />

        <div className="flex flex-col my-4">
          <span className="text-4xl font-semibold">Séries</span>
          <p className="text-neutral-500 text-sm">
            As suas séries preferidas agora mesmo.
          </p>
        </div>
      </div>

      <Row title="Mais avaliados" type="series" data={series.topRated} />
      <Row title="Ação" type="series" data={series.actionSeries} />
      <Row title="Terror" type="series" data={series.horrorSeries} />
      <Row title="Romance" type="series" data={series.romanceSeries} />
      <Row title="Comédia" type="series" data={series.comedySeries} />
      <Row title="Documentários" type="series" data={series.documentaries} />
    </>
  );
};

export default Page;
