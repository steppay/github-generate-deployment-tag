# github-generate-deployment-tag

배포용 도커이미지 태그명을 생성하는 스크립트입니다.

## 사용법
```
- uses: steppay/github-generate-deployment-tag@main
  id: generate-tag
```

```
${{ steps.generate-tag.outputs.tag }}
```