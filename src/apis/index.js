export const getHomeData = async () => {
  try {
    const res = await fetch(
      "https://raw.githubusercontent.com/Meta-Mobile-Developer-PC/Working-With-Data-API/main/capstone.json"
    );
    const jsonRes = await res.json();
    if (jsonRes) {
      return jsonRes.menu;
    }
    return [];
  } catch (error) {}
};
