from bs4 import BeautifulSoup
import json
import requests

LINKS = ['http://astromebel.ru/catalog/divany', 
         'http://astromebel.ru/catalog/divany/page-2', 
         'http://astromebel.ru/catalog/divany/page-3']
HEADERS = {
    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36"
}

def save_pages(urls):
    for idx, page in enumerate(urls):
        response = requests.get(url=page, headers=HEADERS)
        with open(f'page_{idx}_.html', 'w', encoding='utf-8') as file:
            file.write(response.text)
    print("[INFO] Pages saved!!!")

def get_items_url():
    all_data = []
    
    for i in range(3):
        try:
            with open(f'page_{i}_.html', 'r', encoding='utf-8') as file:
                src = file.read()
        except FileNotFoundError:
            print(f"[WARNING] Page {i} not found")
            continue
    
        soup = BeautifulSoup(src, "html.parser")
        items = soup.select(".items_list li")
        
        for elem in items:
            title = elem.find('h3')            
            if title:
                name = title.get_text().strip()
                price_elem = elem.find('div', 'price')
                if price_elem:
                    price = price_elem.get_text().strip()
                    price_value = price[3:-5] if len(price) > 8 else price
                    
                    all_data.append({
                        "name": name,
                        "price": price_value
                    })
        
        print(f"[INFO] Complete {i} page..")
    
    with open('price.json', 'w', encoding='utf-8') as file:
        json.dump(all_data, file, indent=4, ensure_ascii=False)
    
    print(f"[INFO] Total items: {len(all_data)}")
    return all_data

def create_list_items():
    with open('price.json', 'r', encoding='utf-8') as f:
        items = json.load(f)
    
    with open('price.txt', 'w', encoding='utf-8') as file:
        for idx, item in enumerate(items, 1):
            name = item['name']
            price = item.get('price', 'N/A')
            file.write(f"{idx}. {name} - {price} руб.\n")
    
    print(f"[INFO] Saved {len(items)} items to price.txt")

def work_per_unit():
    with open('price.json', 'r', encoding='utf-8') as file:
        items = json.load(file)

    for item in items:
        print(item["name"])

def main():
    print("=== Начало работы парсера ===")
    
    #Сохраняем страницы
    save_pages(LINKS)
    
    # Парсим данные в JSON
    items_data = get_items_url()
    
    # Создаем текстовый файл
    create_list_items()
    
    # выводим в консоль
    print("\n=== Список диванов ===")
    work_per_unit()
    
    print("\n=== Работа завершена ===")

if __name__ == "__main__":
    main()