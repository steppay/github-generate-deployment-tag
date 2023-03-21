# github-generate-deployment-tag

배포용 도커이미지 태그명을 생성하는 스크립트입니다.

## 사용법

`prefix` 리파지토리 이름을 사용하는데 모노레포에서는 `prefix` 를 지정해야 합니다.
```
- uses: steppay/github-generate-deployment-tag@main
  id: generate-tag
  inputs:
    prefix: 'portal'
```

```
${{ steps.generate-tag.outputs.tag }}
```